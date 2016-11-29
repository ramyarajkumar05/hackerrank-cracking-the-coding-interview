var isPossible = function(){
	var magazine=["o", "l", "x", "imjaw", "bee", "khmla", "v", "o", "v", "o", "imjaw", "l", "khmla", "imjaw", "x"];
	var ransom=["imjaw", "l", "khmla", "x", "imjaw", "o", "l", "l", "o", "khmla", "v", "bee", "o", "o", "imjaw", "imjaw", "o"];
	var map={};
	for(var i=0;i<magazine.length;i++){

		if(map[magazine[i]]==null)
			map[magazine[i]]=1;
		else
			map[magazine[i]]=map[magazine[i]]+1;
	}

for(var j=0;j<ransom.length;j++){

		if(map[ransom[j]] ==null || map[ransom[j]] ==0 )
			{
			console.log("No");
			return;
		}
		else
		{
			map[ransom[j]] = map[ransom[j]]-1;
		}
}
console.log("Yes");
}