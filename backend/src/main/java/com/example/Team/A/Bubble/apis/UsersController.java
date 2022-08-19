package com.example.Team.A.Bubble.apis;

import com.example.Team.A.Bubble.models.ForgetPasswordModel;
import com.example.Team.A.Bubble.models.SignInModel;
import com.example.Team.A.Bubble.models.UsersModel;
import com.example.Team.A.Bubble.service.UsersService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@ResponseBody
public class UsersController {

    @NonNull
    private final UsersService usersService;

    @RequestMapping(method = RequestMethod.GET)
    public List<UsersModel> fetchAllRecords(){
        return usersService.getAllRecords().stream().map(UsersModel::new).collect(Collectors.toList());
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<UsersModel> signUpUser(@RequestBody UsersModel usersModel){
        return ResponseEntity.ok(new UsersModel(usersService.createUser(usersModel)));
    }

    @RequestMapping(value = "/signIn", method = RequestMethod.POST)
    public ResponseEntity<UsersModel> signInUser(@RequestBody SignInModel signInModel){
        return ResponseEntity.ok(new UsersModel(usersService.signIn(signInModel)));
    }

    @RequestMapping(value = "/forgetPassword", method = RequestMethod.PUT)
    public ResponseEntity<UsersModel> signInUser(@RequestBody ForgetPasswordModel forgetPasswordModel){
        return ResponseEntity.ok(new UsersModel(usersService.forgetPassword(forgetPasswordModel)));
    }
}