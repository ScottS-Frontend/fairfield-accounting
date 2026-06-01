(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/portal/messages/messages.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "messages-module-scss-module__dwnYGa__active",
  "avatar": "messages-module-scss-module__dwnYGa__avatar",
  "conversation": "messages-module-scss-module__dwnYGa__conversation",
  "detailAvatar": "messages-module-scss-module__dwnYGa__detailAvatar",
  "detailHeader": "messages-module-scss-module__dwnYGa__detailHeader",
  "emptyIcon": "messages-module-scss-module__dwnYGa__emptyIcon",
  "emptyState": "messages-module-scss-module__dwnYGa__emptyState",
  "messageDetail": "messages-module-scss-module__dwnYGa__messageDetail",
  "messageHeader": "messages-module-scss-module__dwnYGa__messageHeader",
  "messageList": "messages-module-scss-module__dwnYGa__messageList",
  "messagePreview": "messages-module-scss-module__dwnYGa__messagePreview",
  "messageSubject": "messages-module-scss-module__dwnYGa__messageSubject",
  "messageTime": "messages-module-scss-module__dwnYGa__messageTime",
  "messages": "messages-module-scss-module__dwnYGa__messages",
  "messagesContainer": "messages-module-scss-module__dwnYGa__messagesContainer",
  "originalMessage": "messages-module-scss-module__dwnYGa__originalMessage",
  "pageHeader": "messages-module-scss-module__dwnYGa__pageHeader",
  "previewContent": "messages-module-scss-module__dwnYGa__previewContent",
  "previewDate": "messages-module-scss-module__dwnYGa__previewDate",
  "previewHeader": "messages-module-scss-module__dwnYGa__previewHeader",
  "previewRole": "messages-module-scss-module__dwnYGa__previewRole",
  "previewText": "messages-module-scss-module__dwnYGa__previewText",
  "readReceipt": "messages-module-scss-module__dwnYGa__readReceipt",
  "reply": "messages-module-scss-module__dwnYGa__reply",
  "replyBox": "messages-module-scss-module__dwnYGa__replyBox",
  "replyHeader": "messages-module-scss-module__dwnYGa__replyHeader",
  "replySender": "messages-module-scss-module__dwnYGa__replySender",
  "replyTime": "messages-module-scss-module__dwnYGa__replyTime",
  "sendBtn": "messages-module-scss-module__dwnYGa__sendBtn",
  "unread": "messages-module-scss-module__dwnYGa__unread",
  "unreadDot": "messages-module-scss-module__dwnYGa__unreadDot",
  "userReply": "messages-module-scss-module__dwnYGa__userReply",
});
}),
"[project]/src/app/portal/messages/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessagesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/portal/messages/messages.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const initialMessages = [
    {
        id: 1,
        sender: 'Sarah Mitchell',
        senderRole: 'Senior Tax Director',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
        subject: 'Q2 Tax Documents Needed',
        preview: 'Hi John, I need a few more documents to complete your Q2 tax filing. Could you please upload your latest expense reports?',
        date: 'May 28, 2026',
        time: '2:30 PM',
        unread: true,
        replies: [
            {
                sender: 'You',
                text: 'Sure, I will upload them by end of day.',
                time: '3:15 PM',
                isUser: true
            }
        ]
    },
    {
        id: 2,
        sender: 'Robert Stewart',
        senderRole: 'Founder & Managing Partner',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
        subject: 'Annual Review Meeting',
        preview: 'Let us schedule your annual financial review for next month. I have some strategic recommendations to discuss.',
        date: 'May 25, 2026',
        time: '10:00 AM',
        unread: false,
        replies: []
    },
    {
        id: 3,
        sender: 'Amanda Rodriguez',
        senderRole: 'Virtual CFO',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
        subject: 'Q3 Budget Forecast',
        preview: 'Your Q3 budget forecast is ready for review. I have attached the detailed projections and KPI dashboard.',
        date: 'May 20, 2026',
        time: '4:45 PM',
        unread: false,
        replies: [
            {
                sender: 'You',
                text: 'Thanks Amanda, I will review this weekend.',
                time: '5:30 PM',
                isUser: true
            },
            {
                sender: 'Amanda Rodriguez',
                text: 'Perfect, let me know if you have any questions.',
                time: '5:35 PM',
                isUser: false
            }
        ]
    }
];
function MessagesPage() {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMessages);
    const [selectedMessage, setSelectedMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replyText, setReplyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const selected = messages.find((m)=>m.id === selectedMessage);
    const handleSendReply = ()=>{
        if (!replyText.trim() || !selectedMessage) return;
        setMessages((prev)=>prev.map((msg)=>{
                if (msg.id === selectedMessage) {
                    return {
                        ...msg,
                        replies: [
                            ...msg.replies,
                            {
                                sender: 'You',
                                text: replyText,
                                time: 'Just now',
                                isUser: true
                            }
                        ],
                        unread: false
                    };
                }
                return msg;
            }));
        setReplyText('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messages,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Messages"
                    }, void 0, false, {
                        fileName: "[project]/src/app/portal/messages/page.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Communicate with your Fairfield Accounting team."
                    }, void 0, false, {
                        fileName: "[project]/src/app/portal/messages/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/portal/messages/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messagesContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageList,
                        children: messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messagePreview, " ").concat(selectedMessage === msg.id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : '', " ").concat(msg.unread ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].unread : ''),
                                onClick: ()=>setSelectedMessage(msg.id),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: msg.avatar,
                                        alt: msg.sender,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/portal/messages/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewHeader,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        children: msg.sender
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/messages/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewDate,
                                                        children: msg.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/messages/page.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/messages/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewRole,
                                                children: msg.senderRole
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portal/messages/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewText,
                                                children: msg.preview
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portal/messages/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portal/messages/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    msg.unread && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].unreadDot
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/portal/messages/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, msg.id, true, {
                                fileName: "[project]/src/app/portal/messages/page.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/portal/messages/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageDetail,
                        children: selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: selected.avatar,
                                            alt: selected.sender,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailAvatar
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/portal/messages/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: selected.sender
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/portal/messages/page.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: selected.senderRole
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/portal/messages/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/portal/messages/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/portal/messages/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].conversation,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].originalMessage,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageHeader,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageSubject,
                                                            children: selected.subject
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/portal/messages/page.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messageTime,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaClock"], {}, void 0, false, {
                                                                    fileName: "[project]/src/app/portal/messages/page.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                selected.date,
                                                                " at ",
                                                                selected.time
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/portal/messages/page.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/portal/messages/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: selected.preview
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/portal/messages/page.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/portal/messages/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        selected.replies.map((reply, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reply, " ").concat(reply.isUser ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userReply : ''),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyHeader,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replySender,
                                                                children: reply.sender
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/portal/messages/page.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyTime,
                                                                children: reply.time
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/portal/messages/page.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/portal/messages/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: reply.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/messages/page.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 21
                                                    }, this),
                                                    reply.isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheckDouble"], {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readReceipt
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/messages/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 38
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/portal/messages/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/portal/messages/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyBox,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: replyText,
                                            onChange: (e)=>setReplyText(e.target.value),
                                            placeholder: "Type your reply...",
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/portal/messages/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSendReply,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sendBtn,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPaperPlane"], {}, void 0, false, {
                                                    fileName: "[project]/src/app/portal/messages/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this),
                                                " Send"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/portal/messages/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/portal/messages/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$messages$2f$messages$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyIcon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/portal/messages/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Select a message to view the conversation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/portal/messages/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/portal/messages/page.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/portal/messages/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/portal/messages/page.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/portal/messages/page.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(MessagesPage, "wuXnHIJCLGozGZFcmKowIuhALAE=");
_c = MessagesPage;
var _c;
__turbopack_context__.k.register(_c, "MessagesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_portal_messages_4d41bd55._.js.map