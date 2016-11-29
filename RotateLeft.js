var rotate = function(a,k){
	var rotate="";
	var n=a.length;
	k=k%n;
	var temp=[];
	for(var i=0;i<=k-1;i++){
		temp.push(a[i]);
	}
	for(i=k;i<=n-1;i++){
		a[i-k]=a[i];
	}
	for(i=0;i<=k-1;i++){
		a[n-k+i]=temp[i];
	}

	for(i=0;i<a.length;i++){
		rotate = rotate + " " +a[i];

	}
	return rotate;
}

