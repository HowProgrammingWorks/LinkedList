import Foundation

class Node {
    var data: String
    
    var next: Node?
    weak var previous: Node? //  weak to avoid memory leak. ARC do the trick.
    // Every Node knows only its neighbours
    init(with data: String) {
        self.data = data
    }
}

class LinkedList {
    private var head: Node?
    private var tail: Node? // List knows its head and tail.
    
    var isEmpty: Bool {
        return head == nil
    }
    
    var first: Node? {
        return head
    }
    
    var last: Node? {
        return tail
    }
    
    func append(value: String) {
        let newNode = Node(with: value)
        
        if let tailNode = tail {        // if tail exist
            newNode.previous = tailNode
            tailNode.next = newNode
        }
        else {
            head = newNode             // This is the first append
        }
        tail = newNode
    }
    
    func printList() {
        var text = "["
        var node = head
        
        while node != nil {
            text += "\(node!.data)"
            node = node!.next
            if node != nil { text += ", " }
        }
        text += "]"
        print(text)
    }
    
    
    func removeAll() {    // When head and tail is nil, weak ref will automatically delete its references one by one.
        head = nil
        tail = nil
    }
    
    
    func node(at index: Int) -> Node? {
        if index >= 0 {
            var node = head
            var i = index
            
            while node != nil {
                if i == 0 { return node } // Iterating over the List
                i -= 1
                node = node!.next
            }
        }
        return nil
    }
    
}


let myList = LinkedList()

myList.append(value: "1231")
myList.append(value: "Car")
myList.append(value: "Dog")
myList.append(value: "Harry Potter")

myList.printList() // [1231, Car, Dog, Harry Potter]
let secondNode = myList.node(at: 1)?.data // Car

myList.removeAll()

myList.printList() // []
