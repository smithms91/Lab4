"use strict";

function ProfileService() {
    let profile = {
        name: "Mike",
        contact: "586-888-9127",
        bio: "Sup"
    }

    const getUserProfile = (profile) => {
        return profile;
    }

    const setUserProfile = (name, contact, bio) => {
        let newProfile = {
            name: name,
            contact: contact,
            bio: bio
        }
        newProfile = profile;
    }

    return {
        getUserProfile,
        setUserProfile
    }
}



angular.module("lab4").factory("ProfileService", ProfileService);