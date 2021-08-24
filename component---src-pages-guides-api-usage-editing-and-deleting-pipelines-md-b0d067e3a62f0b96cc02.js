(self.webpackChunkcloudmanager_api_docs=self.webpackChunkcloudmanager_api_docs||[]).push([[495],{3555:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return h}});var i,p=t(22122),a=t(19756),o=(t(15007),t(64983)),d=t(99536),r=["components"],l={},s=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),m={_frontmatter:l},u=d.Z;function h(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.mdx)(u,(0,p.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"editing-pipelines"},"Editing Pipelines"),(0,o.mdx)("p",null,"The Cloud Manager API supports editing of the branch property of a pipeline. This is done by executing a ",(0,o.mdx)("inlineCode",{parentName:"p"},"PATCH")," request to the pipeline endpoint. The body should be the same structure as the response to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"GET")," request to the pipeline endpoint except that ",(0,o.mdx)("em",{parentName:"p"},"only")," the ",(0,o.mdx)("inlineCode",{parentName:"p"},"BUILD")," phase need be submitted in the body. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"repositoryId")," property of the build phase object may be ommitted."),(0,o.mdx)("p",null,"For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'PATCH https://cloudmanager.adobe.io/api/program/4/pipeline/1\n\n{\n  "phases" : [\n    {\n      "name":"BUILD_1",\n      "type":"BUILD",\n      "repositoryId" : "1",\n      "branch": "develop"\n    }\n  ]\n}\n')),(0,o.mdx)("h3",{id:"building-a-tag"},"Building a Tag"),(0,o.mdx)("p",null,"Using this API, it is possible to specify a tag name instead of a branch name. To do this, specify the ",(0,o.mdx)("inlineCode",{parentName:"p"},"branch")," value to ",(0,o.mdx)("inlineCode",{parentName:"p"},"refs/tags/TAGNAME"),". For example, if the tag is ",(0,o.mdx)("inlineCode",{parentName:"p"},"release-20200214"),", you would execute:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'PATCH https://cloudmanager.adobe.io/api/program/4/pipeline/1\n\n{\n  "phases" : [\n    {\n      "name":"BUILD_1",\n      "type":"BUILD",\n      "repositoryId" : "1",\n      "branch": "refs/tags/release-20200214"\n    }\n  ]\n}\n')),(0,o.mdx)(s,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Specifying a tag is ",(0,o.mdx)("strong",{parentName:"p"},"only")," possible using this API, not the Cloud Manager UI."),(0,o.mdx)("h2",{id:"deleting-pipelines"},"Deleting Pipelines"),(0,o.mdx)("p",null,"Deleting a pipeline can be done by executing a ",(0,o.mdx)("inlineCode",{parentName:"p"},"DELETE")," request to the pipeline endpoint."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-api-usage-editing-and-deleting-pipelines-md-b0d067e3a62f0b96cc02.js.map