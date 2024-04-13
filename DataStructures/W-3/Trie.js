// Insert,contains/search,
// searchPrefix(suggessions),delete

class Node{
    constructor(){
        this.children = {};
        this.wordEnd = false; 
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }

    insert(word){
        let curr = this.root
        for(let i=0 ; i<word.length ; i++){
            if(!(word[i] in curr.children)){
                curr.children[word[i]] = new Node();
            }
            curr = curr.children[word[i]]
        }
        curr.wordEnd = true;
    }
    
    contains(word){
        let curr = this.root;
        for(let i=0 ; i<word.length; i++){
            if(!(word[i] in curr.children)){
                return false;
            }
            curr = curr.children[word[i]];
        }
        return curr.wordEnd;
    }

    searchPrefix(word){
        if(!word) return 'Enter something';

        let words = [];
        let curr = this.root;
        for(let i=0 ; i<word.length ; i++){
            if(!(word[i] in curr.children)){
                return word;
            }
            curr = curr.children[word[i]];
        }
        this.searchHelper(curr,word,words);
        return words;
    }

    searchHelper(root,word,words){
        if(root.wordEnd === true){
            words.push(word);
        }
        for(let child in root.children){
            this.searchHelper(root.children[child],word+child,words)
        }
    }

    delete(word){
        this.deleteHelper(this.root,word,0);
    }
    deleteHelper(root,word,index){
        if(!root){
            return false;
        }
        if(word.length === index){
            if(!root.wordEnd){
                return false;
            }
            root.wordEnd = false;
            return Object.keys(root.children).length === 0;
        }
        let char = word[index];
        if(this.deleteHelper(root.children[char],word,index+1)){
            delete root.children[char];
            return Object.keys(root.children).length === 0;
        }
    }

}

const trie = new Trie();
trie.insert('Ramanan')
trie.insert('Ramadan')
trie.insert('Ramaleela')
trie.insert('Raveendran');
trie.insert('Ravi');
// trie.delete('Raveendran');
console.log(trie.searchPrefix('Rav'));

