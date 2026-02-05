import React from 'react';
import Layout from '@theme/Layout';

export default function EmptyBlog() {
  return (
    <Layout title="Blog">
      <main
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h1>No posts yet ✨</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
          We’re working on our first articles.
        </p>
        <p>Check back soon!</p>
      </main>
    </Layout>
  );
}
