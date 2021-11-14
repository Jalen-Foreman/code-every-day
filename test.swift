// THIS IS HOW YOU COMMENT IN SWIFT!!

// BOOLEAN
true
false

// INTEGER
10
12

// DOUBLE
0.3
0.3

// VARIABLES & CONSTANTS
//----------------------------
//var num = 10
//var sum = 10 + 10
//let constant = true
//let immutable = true

//print(sum)
//print(num)

// FUNCTION DECLARATION
//----------------------------
//func myfunc(a: Int,b: Int){
//    print(a+b)
//}
//myfunc(a: 10, b: 12)

//func myfunc(a:Int,b:Int) -> Int{
//    return a+b
//}
//print(myfunc(a: 10, b: 10))

// FUNCTION NAME DECLARATION
//----------------------------
//func myfunc(firstNumber a:Int, secondNumber b:Int) -> Int{
//    return a + b
//}
//print(myfunc(firstNumber: 5, secondNumber: 5))

// STRUCTURES
//----------------------------
//struct ChatView{
//    // Properties
//    var message: String = ""
//    // Computed Property
//    var messageWithPrefix:String {
//        "Chris says: " + message
//    }
//
//    // Methods
//    func sendChat(){
//        var db = Database()
//        let successful = db.saveData(data: message)
//    }
//
//}

//struct Database {
//    // private syntax makes the properties scope only available to this specific structure
//    private var serverName = "Server1"
//
//    func saveData(data:String) -> Bool {
//        return true
//    }
//}
//var result:ChatView = ChatView()
//result.message = "Hi"
//print(result.sendChat())

// IF STATEMENTS && COMPARISONS
//----------------
// && AND
// || OR
// >,<, >=, <=, ==
let a = 1
let b = 2
let c = 3
let d = "hello"
let e = false
let f = true
let g = true

if f && g {
    print("Hello World")
}
if (f || e) && (a < 0) {
    print("Hello World")
}
else if e{
    print("Hello")
}
else if g{
    print("World")
}
else{
    print("Catch all")
}
