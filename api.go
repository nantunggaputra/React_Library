package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	fmt.Print("Glad to see you, Mr/Ms ")
	reader := bufio.NewReader(os.Stdin)
	name, _ := reader.ReadString('\n')
	name = strings.TrimSpace(name)
	if name == "" {
		fmt.Print()
	} else {
		fmt.Print("Mr/Ms " + name)
	}
	fmt.Println()
	var career = "Programmer"
	switch career {
	case "Sales":
		fmt.Println("I Switched Career")
	case "Admin":
		fmt.Println("I Switched Career")
	case "Programmer":
		fmt.Printf("My Selected Career: %s\n", career)
	default:
		fmt.Println("Career")
	}
	fmt.Println(`Hello there,
I'm an enthusiastic newcomer
to the world of programming and web development.
Each day, I'm inspired to continually learn
and enhance my technical skills.
With more practice, I'll have a solid foundation for
understanding logic and project planning.
I'm seeking opportunities to collaborate with
professionals and continue growing in this industry.
Let's work together on innovative technology solutions!
"Stay Hungry"
"Stay Foolish"
Have a good day,
</in>
Nantungga Putra
May 2023`)
}
