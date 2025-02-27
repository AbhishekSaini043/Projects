#x=as.numeric(readline())
#if(x>0)
#{
 #print("x is positive no.")
#} else if (x<0)
#{ 
#  print("x is positive no.")
#} else {
#    print("x is zero")
#}

# x=as.numeric(readline())
# if(x%%2 == 0)
# {
    # print("x is even")
# } else { print("x is odd")}

# for ( i in 1:5) {
    # print(i)
# }

# i<-1
# while (i<=5) {
    # print(i)
    # i<-i+1
# }


for (n in 1:20) {  
  if (n %% 2 == 0) {
    print(paste(n, "is even"))
  } else {
    print(paste(n, "is odd"))
  }
}

