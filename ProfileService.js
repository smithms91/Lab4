"use strict";

function ProfileService() {
    let newProfile = {};

    const getUserProfile = () => {
        return newProfile;
    }

    const profile = (user) => {
        return user;
    }

    const setUserProfile = (name, email, bio) => {
        newProfile = {
            name: name,
            email: email,
            bio: bio
        }
    }

    return {
        getUserProfile,
        setUserProfile
    }
}



angular.module("lab4").factory("ProfileService", ProfileService);