// default parameters là một tham số mặc định
function greeting(name = 'friend', language = 'ja'){
	if(language === 'en'){
		return `Hi, ${name}`;
	}

	if(language === 'ja'){
		return `Konichiwa, ${name}`;
	}
	
	return `Chào ${name}`;
}

greeting();