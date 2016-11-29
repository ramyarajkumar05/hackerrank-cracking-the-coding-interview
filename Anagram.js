var getDeleteCountToGetAnagram=function(s1,s2){
	var map={};
	var counter=0;
	// Each character is the Key and the number of times it is repeated is the Value.
	for(var i=0;i<s1.length;i++){

		if(map[s1[i]]==null)
			map[s1[i]]=1;
		else
			map[s1[i]]=map[s1[i]]+1;
	}

	for(var j=0;j<s2.length;j++)
	{
		if(map[s2[j]] == null || map[s2[j]] ==0) 
			counter ++;
		else
			map[s2[j]] =map[s2[j]]-1;
	}

	for (var key in map)
	{
		counter+= map[key];
	}
return counter;
}