"use strict";

const userProfile = {
    template: `
    <div id="profile_section">
        <div class="top">
            <img class="contact_image" src="img/logo.png">
        </div>
        <div class="bottom">
            <h1 class="contact_header">{{$ctrl.currentUser.name}}</h1>
            <p class="contact_info">{{$ctrl.currentUser.email}}</p>
            <p class="contact_bio">{{$ctrl.currentUser.bio}}</p>
            <button class="contact_button" ng-click="$ctrl.editInfo($ctrl.currentUser)">Edit</button>
        </div>
    </div>
    `,
    controller: ["$location", "ProfileService", function($location, ProfileService) {
        const vm = this;
        vm.fakeInfo = ProfileService.getUserProfile();
        vm.currentUser = {
            name: "Mike",
            email: "mikesmithdeveloper@gmail.com",
            bio: "I've been doing cool things for as long as I can remember."
        }
        vm.editInfo = (user) => {
            ProfileService.setUserProfile(user.name, user.email, user.bio);
            vm.currentUser = ProfileService.getUserProfile(user);
            $location.path("/edit-profile");
        }
    }]
}


angular.module("lab4").component("userProfile", userProfile);