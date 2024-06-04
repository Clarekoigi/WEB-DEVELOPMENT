var math=9,english=35,kiswahili=25,french=90,cre=44,total;
total=math+english+kiswahili+french;
average=total/4
document.write(average)
if(average>=80){
    document.write("A");
}
else if(average>=70){
    document.write("B");
}
else if(average>=60){
    document.write("C");
}
else if(average>=50){
    document.write("D");
}
else{
    document.write("E");
}
