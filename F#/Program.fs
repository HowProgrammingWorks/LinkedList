// Learn more about F# at http://fsharp.org

open System
open HowProgrammingWorks.SingleLinked
open System.Drawing



[<EntryPoint>]
let main argv =
    Console.Clear()

    // let n0 : Node<string> = { prev = None; data = "1"};
    // let n1 : Node<string> = { prev = Some n0; data = "2"};
    // let n2 : Node<string> = { prev = Some n1; data = "3"};

    // write (Some n2)

    //HowProgrammingWorks.SingleLinked.Example
    HowProgrammingWorks.DoubleLinked.Example
                  
                  


    0 // return an integer exit code
