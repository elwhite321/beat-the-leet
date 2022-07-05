package beat_the_leet

type WordDictionary struct {
	end      bool
	children map[rune]*WordDictionary
}

func Constructor() WordDictionary {
	return WordDictionary{
		children: make(map[rune]*WordDictionary),
	}
}

func (wd *WordDictionary) AddWord(word string) {
	child := wd
	for _, r := range word {
		c, ok := child.children[r]
		if !ok {
			wd := Constructor()
			child.children[r] = &wd
			c = child.children[r]
		}

		child = c
	}
	child.end = true
}

func (wd *WordDictionary) Search(word string) bool {
	var ok bool
	child := wd
	for n, r := range word {
		if r == '.' {
			for _, c := range child.children {
				if found := c.Search(word[n+1:]); found {
					return true
				}
			}
			return false
		} else {
			child, ok = child.children[r]
			if !ok {
				return false
			}
		}
	}
	return child.end
}
