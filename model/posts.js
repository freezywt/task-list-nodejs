module.exports = {
  posts: [
    {
      id: '32323',
      title: 'test of mural',
      description: 'Description test',
    },
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    this.posts.push({ id: generateID(), title, description });
  },

};

function generateID() {
  return Math.random().toString(36).substr(2, 9);
}
