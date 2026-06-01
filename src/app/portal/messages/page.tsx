'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaUser, FaClock, FaCheckDouble } from 'react-icons/fa';
import styles from './messages.module.scss';

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
        isUser: true,
      }
    ],
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
    replies: [],
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
        isUser: true,
      },
      {
        sender: 'Amanda Rodriguez',
        text: 'Perfect, let me know if you have any questions.',
        time: '5:35 PM',
        isUser: false,
      }
    ],
  },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');

  const selected = messages.find(m => m.id === selectedMessage);

  const handleSendReply = () => {
    if (!replyText.trim() || !selectedMessage) return;

    setMessages(prev => prev.map(msg => {
      if (msg.id === selectedMessage) {
        return {
          ...msg,
          replies: [
            ...msg.replies,
            {
              sender: 'You',
              text: replyText,
              time: 'Just now',
              isUser: true,
            }
          ],
          unread: false,
        };
      }
      return msg;
    }));

    setReplyText('');
  };

  return (
    <div className={styles.messages}>
      <header className={styles.pageHeader}>
        <h1>Messages</h1>
        <p>Communicate with your Fairfield Accounting team.</p>
      </header>

      <div className={styles.messagesContainer}>
        {/* Message List */}
        <div className={styles.messageList}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`${styles.messagePreview} ${selectedMessage === msg.id ? styles.active : ''} ${msg.unread ? styles.unread : ''}`}
              onClick={() => setSelectedMessage(msg.id)}
            >
              <img src={msg.avatar} alt={msg.sender} className={styles.avatar} />
              <div className={styles.previewContent}>
                <div className={styles.previewHeader}>
                  <h4>{msg.sender}</h4>
                  <span className={styles.previewDate}>{msg.date}</span>
                </div>
                <span className={styles.previewRole}>{msg.senderRole}</span>
                <p className={styles.previewText}>{msg.preview}</p>
              </div>
              {msg.unread && <span className={styles.unreadDot} />}
            </div>
          ))}
        </div>

        {/* Message Detail */}
        <div className={styles.messageDetail}>
          {selected ? (
            <>
              <div className={styles.detailHeader}>
                <img src={selected.avatar} alt={selected.sender} className={styles.detailAvatar} />
                <div>
                  <h3>{selected.sender}</h3>
                  <span>{selected.senderRole}</span>
                </div>
              </div>

              <div className={styles.conversation}>
                <div className={styles.originalMessage}>
                  <div className={styles.messageHeader}>
                    <span className={styles.messageSubject}>{selected.subject}</span>
                    <span className={styles.messageTime}>
                      <FaClock /> {selected.date} at {selected.time}
                    </span>
                  </div>
                  <p>{selected.preview}</p>
                </div>

                {selected.replies.map((reply, index) => (
                  <div key={index} className={`${styles.reply} ${reply.isUser ? styles.userReply : ''}`}>
                    <div className={styles.replyHeader}>
                      <span className={styles.replySender}>{reply.sender}</span>
                      <span className={styles.replyTime}>{reply.time}</span>
                    </div>
                    <p>{reply.text}</p>
                    {reply.isUser && <FaCheckDouble className={styles.readReceipt} />}
                  </div>
                ))}
              </div>

              <div className={styles.replyBox}>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply..."
                  rows={3}
                />
                <button onClick={handleSendReply} className={styles.sendBtn}>
                  <FaPaperPlane /> Send
                </button>
              </div>
            </>
          ) : (
            <div className={styles.emptyState}>
              <FaEnvelope className={styles.emptyIcon} />
              <p>Select a message to view the conversation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}