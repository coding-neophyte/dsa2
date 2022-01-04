class LinkedListNode {
    constructor(value){
        this.value = value;
        this.next = null;

    }

    add(node){
      !this.next ? this.next = node : add(this.next)
    }

    getList(){
        if (!this.next){
            return this.value;
        }else if (this.next) {
            return this.getList() + this.next.getList()
        }
    }
}


class BinaryTreeNode {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right  = null;
    }
    add(node){
        if(node < this.data){
            if(!this.left){
                this.left = node;
            } else{
               this.left.add(node)
            }
        } else{
            if(!this.right){
                this.right = node;
            }else{
                this.right.add(node)
            }
        }
    }
}

class PersonTreeNode {
    constructor(person){
        this.value = person.name;
        this.person = person;
        this.left = null;
        this.right = null;
    }
    add(node){
        if(node < this.value){
            if(!this.left){
                this.left = node;
            } else{
               this.left.add(node)
            }
        } else{
            if(!this.right){
                this.right = node;
            }else{
                this.right.add(node)
            }
        }
    }

    findPerson(name){
        if(name === this.value){
            return this.person;
        } else if (name < this.value){
            this.left.findPerson(name)
        } else {
            this.right.findPerson(name)
        }
    }
}

    const traverse = (node) => {


        [{ value: node.value,
            children: [] }]

            console.log(node.value)
            console.log(" ", " ", node.children )
            //console.log each node data value
            // console log each child data value indented two spaces  "   "
    }














// Tree Nodes Traverse
// Tree Nodes have an associated value and children. For these tree nodes, there are an arbitrary list of children (think Folders and Files, or DOM nodes).

// Challenge
// For this problem, assume we have node objects that have a value property and a children property that is an array of child nodes. The setup looks like this:

// A
// / | \
// B  C  E
// |     |
// D     F

//

// Hints:

// Use recursion. The "exit" is logging the node value.
// Do the problem without the indentation first if that seems daunting. Remember you can add additional parameters to your function they may not be used on the initial call, but could have a default and then be used for subsequent calls



// For this challenge, write a function that takes a node and console.logs the data value each node and then the data for each of its children, but indented two spaces. The function should be general and not specific to this instance.


//this.value === person.name
//this.person = person object
// if name is less than value(person.name) we search the left side for correct match
// if name is greater than value(person.name) we search right side for correct match



// Implement LinkedListNode as a data structure (a class) that has:

// value property represented by this node. It should be initialized via the constructor
// next property (null if empty) that points to the next node
// add(node) method that takes a node of type LinkedListNode. If current node already has next, it should use recursion to delegate to the next node's add(node) method.
// getList() method that returns a string with values in order. Should use recursion to delegate.




//compare name argument to the class value
//if  name === value, return person object
//if name !== value,
