module HowProgrammingWorks.FS.SingleLinked

open System

type Node<'T> = {
    mutable prev : Node<'T> option;
    mutable data : 'T;
}

let empty() = {prev = None; data = None; }

let pust node data =
    Some { prev = node; data = data }


let Example =

    let rec write (x : Node<string> option)  =
        match x with
            | None -> 
                Console.WriteLine()
            | Some n -> 
                printf "%s " n.data
                write n.prev

    let n0 : Node<string> = {prev = None; data = "road";}
    let n1 : Node<string> = {prev = Some n0; data = "the";}
    let n2 : Node<string> = {prev = Some n1; data = "across";}
    let n3 : Node<string> = {prev = Some n2; data = "running";}
    let n4 : Node<string>= {prev = Some n3; data = "was";}
    let n5 : Node<string>= {prev = Some n4; data = "cat";}
    let n6 : Node<string>= {prev = Some n5; data = "Black";}

    write (Some n6)