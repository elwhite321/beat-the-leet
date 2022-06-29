function Node(value) {
  this.value = value;
  this.endOfWord = false;
  this.children = {};
}

class WordDictionary {
  constructor() {
    this.root = new Node(null);
  }

  addWord(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i += 1) {
      const letter = word[i];
      if (!current.children[letter]) {
        current.children[letter] = new Node(letter);
      }
      current = current.children[letter];
    }
    current.endOfWord = true;
  }

  search(word, root = undefined) {
    let current = root ?? this.root;
    for (let i = 0; i < word.length; i += 1) {
      const letter = word[i];
      if (letter === ".") {
        const childKeys = Object.keys(current.children);
        for (let j = 0; j < childKeys.length; j += 1) {
          if (this.search(word.slice(i + 1), current.children[childKeys[j]])) {
            return true;
          }
        }
        return false;
      } else {
        if (!current.children[letter]) {
          return false;
        }
        current = current.children[letter];
      }
    }
    return current.endOfWord;
  }
};
