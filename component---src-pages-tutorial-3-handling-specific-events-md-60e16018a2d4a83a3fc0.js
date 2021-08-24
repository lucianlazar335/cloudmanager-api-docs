(self.webpackChunkcloudmanager_api_docs=self.webpackChunkcloudmanager_api_docs||[]).push([[244],{18949:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return h}});var o,a=n(22122),i=n(19756),d=(n(15007),n(64983)),r=n(99536),p=["components"],l={},s=(o="Glitch",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),c={_frontmatter:l},u=r.Z;function h(e){var t=e.components,n=(0,i.Z)(e,p);return(0,d.mdx)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"tutorial-step-3---handling-specific-events"},"Tutorial Step 3 - Handling Specific Events"),(0,d.mdx)("p",null,"As seen in ",(0,d.mdx)("a",{parentName:"p",href:"1-a-basic-webhook.md"},"Step 1"),", webhooks can be registered for one or more events. Depending on the type of integration you are actually building with Cloud Manager, you will end up with a single webhook script which can handle multiple events in different ways. The event can be identified by using the combination of the ",(0,d.mdx)("inlineCode",{parentName:"p"},"@type")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"xdmEventEnvelope:objectType")," values. A full list can be found on the ",(0,d.mdx)("a",{parentName:"p",href:"/cloudmanager-api-docs/guides/api-usage/receiving-events/"},"Receiving Events")," page. For this step in the tutorial, you're going to add a simple log statement when event being received is a Pipeline Execution Started event."),(0,d.mdx)("h2",{id:"updating-the-webhook"},"Updating the Webhook"),(0,d.mdx)("p",null,"Replace the ",(0,d.mdx)("inlineCode",{parentName:"p"},"app.post")," block with this code:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},'app.post("/webhook", (req, res) => {\n  res.writeHead(200, { "Content-Type": "application/text" });\n  res.end("pong");\n\n  const STARTED = "https://ns.adobe.com/experience/cloudmanager/event/started";\n  const EXECUTION =\n    "https://ns.adobe.com/experience/cloudmanager/pipeline-execution";\n\n  const event = req.body.event;\n\n  if (\n    STARTED === event["@type"] &&\n    EXECUTION === event["xdmEventEnvelope:objectType"]\n  ) {\n    console.log("received execution start event");\n  }\n});\n')),(0,d.mdx)("p",null,"Now when a Pipeline Execution Started event is received, the message ",(0,d.mdx)("inlineCode",{parentName:"p"},"received execution start event")," will be logged."),(0,d.mdx)("h2",{id:"running-the-updated-webhook"},"Running the Updated Webhook"),(0,d.mdx)("p",null,"If you are running the script locally, you'll need to stop and restart the node process. You don't need to restart ngrok. In fact, if you do restart ngrok, the URL will likely change and you'll need to go back into the ",(0,d.mdx)("a",{href:"https://console.adobe.io/integrations",target:"_new"},"Adobe I/O Console")," and update the Webhook URL."),(0,d.mdx)("p",null,"If you are running the script through Glitch, Glitch will restart automatically. If you don't want to update your existing Glitch project (or lost it), you can click the button below to start over."),(0,d.mdx)(s,{projectName:"adobe-cloudmanager-api-tutorial-step3",mdxType:"Glitch"}),(0,d.mdx)("h2",{id:"next-step"},"Next Step"),(0,d.mdx)("p",null,"With all that done, you're ready to proceed to the next step. Continue to ",(0,d.mdx)("a",{parentName:"p",href:"4-getting-an-access-token.md"},"Step 4"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorial-3-handling-specific-events-md-60e16018a2d4a83a3fc0.js.map