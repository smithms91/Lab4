"use strict";

const userProfile = {
    template: `
    <div id="profile_section">
        <div class="top">
            <img class="contact_image" src="img/logo.png">
        </div>
        <div class="bottom">
            <h1 class="contact_header" ng-model="$ctrl.user.name">Grant Chirpus</h1>
            <p class="contact_info" ng-model="$ctrl.user.info">grant@grandcircus.co</p>
            <p class="contact_bio" ng-model="$ctrl.user.bio">Sup my name is Mike and I am so cool its almost scary.</p>
            <button class="contact_button" ng-click="$ctrl.editInfo($ctrl.user)">Edit</button>
        </div>
    </div>
    `,
    controller: ["$location", "ProfileService", function($location, ProfileService) {
        const vm = this;
        vm.editInfo = (user) => {
            ProfileService.getUserProfile(user);
            $location.path("/edit-profile");
        }
    }]
}


angular.module("lab4").component("userProfile", userProfile);