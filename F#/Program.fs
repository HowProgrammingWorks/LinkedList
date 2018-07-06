// Learn more about F# at http://fsharp.org

open System

[<EntryPoint>]
let main argv =
    Console.Clear()
    
    printf "Linked list: \n"
    HowProgrammingWorks.FS.SingleLinked.Example
    printf "\n"

    printf "Double linked list: \n"
    HowProgrammingWorks.FS.DoubleLinked.Example
    printf "\n"

    0 // return an integer exit code