module HowProgrammingWorks.FS.SingleLinked

open System

type Node<'T> = {
    mutable next : Node<'T> option;
    mutable data : 'T;
}

let empty() = {next = None; data = None; }

let pust node data =
    Some { next = node; data = data }


let Example =

    let rec write (x : Node<string> option)  =
        match x with
            | None -> 
                Console.WriteLine()
            | Some n -> 
                printf "%s " n.data
                write n.next

    let n6 : Node<string> = {next = None; data = "road";}
    let n5 : Node<string> = {next = Some n6; data = "the";}
    let n4 : Node<string> = {next = Some n5; data = "across";}
    let n3 : Node<string> = {next = Some n4; data = "running";}
    let n2 : Node<string>= {next = Some n3; data = "was";}
    let n1 : Node<string>= {next = Some n2; data = "cat";}
    let n0 : Node<string>= {next = Some n1; data = "Black";}

    write (Some n0)