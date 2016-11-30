package org.simpleuse.controller;


import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;

@RestController
@RequestMapping("/user")
public class UserController {

	@RequestMapping("/info")
	public String userInfo(){
		Map<String, Object> map = new HashMap<String, Object>();
		JSONObject json = new JSONObject();
		json.put("key", "value");
		return json.toString();
	}
	
	
}
