Number("10")    // 10
Number("")      // 0
Number(true)    // 1
Number(false)   // 0
Number(null)    // 0
Number(undefined) // NaN
Number("hello") // NaN
Number("  10  ")  // 10 
Number("10px")    // NaN
Number("10.5")    // 10.5
Number(Symbol()) // ❌ TypeError
Number([5])     // 5
Number([1,2])   // NaN
Number({})      // NaN


String(20)     // "20"
String(true)   // "true"
String(null)   // "null"
String(undefined) // "undefined"
String([1,2])  // "1,2"
String({})     // "[object Object]"



1 == "1"      // true (string → number)
null == undefined // true (special rule)
0 == false    // true (boolean → number)
"0" == false  // true  (false → 0 → "0")
// [] == ""      // true  ([] → "" → "")
// [] == 0       // true  ([] → "" → 0)
null == 0   // false  → comparison rules
null >= 0   // true   → because null → 0
"10" * 2    // 20     → "10" → 10
"hello" - 1 // NaN    → "hello" → NaN
