// cách viết object rút ngắn với tên key trùng tên value
// hoặc viết function 
const name = 'Tom';
const cat = {
	name,
	run(){
		console.log(`${this.name} is running`);
	}
}

cat.run();