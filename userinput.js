console.log(process.argv); 
//print 2 things bydefault 1) Path of nodejs exe file 2) Path of file where you run your code
//but if you want to give parameter to it you can write while running the code like :-
//node userinput.js Hellow Bye
// Here Hellow and Bye pass as parameter to argument vector

console.log(process.argv[2]);//print the third argument
//argv -> argument vector which store [path of exe file,path of where you run,argument1,argument2,....,argumentn]
