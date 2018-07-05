module HowProgrammingWorks.DoubleLinked

open System

type Node<'T> = {
    mutable prev : Node<'T> option;
    mutable next : Node<'T> option;
    mutable data : 'T;
}

type LinkedList<'T> = {
    mutable first : Node<'T> option;
    mutable last : Node<'T> option;
    mutable count: int;
}

let push (list : LinkedList<'T>, data: 'T) : Node<'T> =
    match list.count with
        | 0 ->
            let node =  {prev = None; next = None; data = data; }
            list.first <- Some node;
            list.last <- Some node;
            list.count <- list.count + 1;
            
            node
        | _ ->             
            let node =  {prev = list.last; next = None; data = data; }            
            list.last.Value.next <- Some node
            list.last <- Some node
            list.count <- list.count + 1
            node


let pull (list : LinkedList<'T>) : 'T option =
    match list.count with
        | 0 ->
            None;
        | 1 ->    
            let node = list.last.Value;
            list.last <- None;
            list.first <- None;
            list.count <- 0;
            Some node.data;
        |_->
            let node = list.last.Value;
            list.last <- node.prev;
            list.count <- list.count - 1;
            Some node.data;

let pullFromStart (list : LinkedList<'T>) : 'T option =
    match list.count with
        | 0 ->
            None;
        | 1 ->    
            let node = list.first.Value;
            list.last <- None;
            list.first <- None;
            list.count <- 0;
            Some node.data;
        |_->
            let node = list.first.Value;
            list.first <- node.next;
            list.count <- list.count - 1;
            Some node.data;


let Example =

    let rec write (list : LinkedList<'T>) =
        match list.count with
            | 0 -> 
                Console.WriteLine()
            | _ ->
                //let value = pull list;
                let value = pullFromStart list;
                Console.Write(String.Format("{0} ", value.Value))
                write(list)



    let list : LinkedList<string> = {first = None; last = None; count = 0;}
    
    push (list, "Black") |> ignore
    push (list, "cat") |> ignore
    push (list, "was") |> ignore
    push (list, "running") |> ignore
    push (list, "across") |> ignore
    push (list, "the") |> ignore
    push (list,"road") |> ignore
    
    write list