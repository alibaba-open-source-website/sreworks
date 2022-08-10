#!/usr/bin/python
# -*- coding: UTF-8 -*-

import ssl
import json
import os

ssl._create_default_https_context = ssl._create_unverified_context

try:
    import urllib.request as request 
    import urllib.request as urllib
except ImportError:
    import urllib2 as request
    import urllib2 as urllib


self_path = os.path.split(os.path.realpath(__file__))[0]

TOKEN = "**********"
USER_AGENT = "ali-opensource"
ENDPOINT = "https://www.yuque.com/api/v2"
NAMESPACE = "sreworks-doc/docs"
LOCAL_PATH = "./docs"
SIDEBARS_FILE = "./sidebars.json"

def yuque(uri):
    headers = {
        "User-Agent": USER_AGENT,
        "X-Auth-Token": TOKEN
    }
    res = urllib.urlopen(request.Request(url=ENDPOINT + uri, headers=headers)).read()
    return json.loads(res).get("data")

def mdx_body(meta, content):
    meta_content = "---\n"
    meta_content += "title: " + meta["title"] + "\n"
    meta_content += "---\n\n"

    # ```javascript 会在mdx中当做jsx代码执行，需要变成```json
    content = content.replace('```json', "```json\n")
    content = content.replace('```javascript', "```js\n")
    content = content.replace('export', "ex port")

    return meta_content + content

toc_list = yuque("/repos/" + NAMESPACE + "/toc")
toc_map = {}
for toc in toc_list:
    data = {
       "items": [],
       "label": toc["title"],
       "uuid": toc["uuid"],
       "parent_uuid": toc["parent_uuid"],
       "depth": toc["depth"],
       "lark_type": toc["type"],
       "collapsed": False
    }
    
    if toc["type"] == "TITLE":
       data["type"] = "category"
    elif toc["type"] == "DOC":
       data["type"] = "doc"
    
    if toc["slug"] not in ["","#"]:
        data["id"] = toc["slug"]

    toc_map[toc["uuid"]] = data

    if toc["parent_uuid"] != "":
        toc_map[toc["parent_uuid"]]["items"].append(toc_map[toc["uuid"]])

for k,v in toc_map.items():
    del v["uuid"]
    del v["parent_uuid"]
    del v["lark_type"]
    del v["depth"]
    if len(v["items"]) == 0:
        del v["collapsed"]
        del v["items"]
    elif v["type"] == "doc":
        v["type"] = "category"
        del v["id"]

sidebars_data = []
for toc in toc_list:
    if toc["depth"] == 1:
       # 第一层收起
       if toc_map[toc["uuid"]].get("collapsed") == False:
           toc_map[toc["uuid"]]["collapsed"] = True
       sidebars_data.append(toc_map[toc["uuid"]])


h = open(self_path + "/" + SIDEBARS_FILE, 'w')
h.write(json.dumps({"sidebars":["index"] + sidebars_data}))
h.close()

for doc in yuque("/repos/" + NAMESPACE + "/docs"):
    print(doc)
    content = yuque("/repos/" + NAMESPACE + "/docs/" + str(doc.get('id')))
    h = open(self_path + "/" + LOCAL_PATH + "/" + doc.get('slug') + ".md", 'w')
    h.write(mdx_body(doc, content['body']))
    h.close()


