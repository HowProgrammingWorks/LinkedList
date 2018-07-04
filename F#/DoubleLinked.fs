module HowProgrammingWorks.DoubleLinked

open System
open HowProgrammingWorks.SingleLinked
open System.Collections.Generic
open System.Threading.Tasks.Dataflow

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

let push (list : LinkedList<'T>, data)  =
    match list.count with
        | 0 ->
            let node =  {prev = None; next = None; data = data; }
            list.first <- Some node;
            list.last <- Some node;
            list.count <- list.count + 1;
            node
        | _ ->             
            let node =  {prev = list.last; next = None; data = data; }
            list.last <- Some node;
            list.count <- list.count + 1;
            node


let pull (list : LinkedList<'T>) =
    match list.count with
        | 0 ->
            None;
        | 1 ->    
            let node = list.last.Value;
            list.last <- None;
            list.first <- None;
            list.count <- 0;
            node.data;
        |_->
            let node = list.last.Value;
            list.last <- node.prev;
            list.count <- list.count - 1;
            node.data;


let Example =

    let rec write (list : LinkedList<'T>) =
        match list.count with
            | 0 -> 
                Console.WriteLine()
            | _ ->
                let value = pull list;
                Console.WriteLine(String.Format("{0}", value))
                write(list)



    let list : LinkedList<'T> = {first = None; last = None; count = 0;}
    
 
    
    push (list,"road") |> ignore
    push list, "the" |> ignore
    push list, "across" |> ignore
    push list, "running" |> ignore
    push list, "was" |> ignore
    push list, "cat" |> ignore
    push list, "Black" |> ignore
    
    write(list)

    0

    

    