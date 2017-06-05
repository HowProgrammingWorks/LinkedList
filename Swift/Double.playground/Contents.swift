import Foundation

public class LinkedList<T> {
    
    public class Node<T> {
        var data: T
        var next: Node<T>?
        weak var previous: Node<T>? //  weak to avoid memory leak. ARC do the trick.
        // Every Node knows only its neighbours
        
        init(data: T) {
            self.data = data
        }
    }
    
    fileprivate var head: Node<T>?
    private var tail: Node<T>? // List knows its head and tail.
    
    public var isEmpty: Bool {
        return head == nil
    }
    
    public var first: Node<T>? {
        return head
    }
    
    public var last: Node<T>? {
        return tail
    }
    
    public func append(data: T) {
        let newNode = Node(data: data)
        if let tailNode = tail {
            newNode.previous = tailNode
            tailNode.next = newNode
        } else {
            head = newNode
        }
        tail = newNode
    }
    
    
    func removeAll() { // When head and tail is nil, weak ref will automatically delete its references one by one.
        head = nil
        tail = nil
    }
    
    public func remove(node: Node<T>) -> T {
        let prev = node.previous
        let next = node.next
        
        if let prev = prev {
            prev.next = next
        } else {
            head = next
        }
        next?.previous = prev
        
        if next == nil {
            tail = prev
        }
        
        node.previous = nil
        node.next = nil
        
        return node.data
    }
    
    
    public func nodeAt(index: Int) -> Node<T>? {
        if index >= 0 {
            var node = head
            var i = index
            while node != nil {
                if i == 0 { return node }
                i -= 1
                node = node!.next
            }
        }
        return nil
    }
}

extension LinkedList: CustomStringConvertible {
    
    public var description: String {
        
        var text = "["
        var node = head
        
        while node != nil {
            text += "\(node!.data)"
            node = node!.next
            if node != nil { text += ", " }
        }
        
        return text + "]"
    }
}


let myList = LinkedList<Int>()


myList.append(data: 1231)
myList.append(data: 3)
myList.append(data: 5)
myList.append(data: 10)

print(myList) // [1231, 3, 5, 10]
let secondNode = myList.nodeAt(index: 1)?.data // 3

myList.removeAll()

print(myList) // []
