// Learn more about F# at http://fsharp.org

open System
open HowProgrammingWorks.SingleLinked
open System.Drawing



[<EntryPoint>]
let main argv =
    Console.Clear()

    
    printf "Linked list: \n"
    HowProgrammingWorks.SingleLinked.Example
    printf "\n"

    printf "Double linked list: \n"
    HowProgrammingWorks.DoubleLinked.Example
    printf "\n"
                  
    Console.ReadKey()
    Console.Clear()                  


    0 // return an integer exit code
