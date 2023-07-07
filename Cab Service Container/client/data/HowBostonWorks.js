import { download, driver_on_way, review, search } from "../assets"
const work = [
    {
        image: download,
        title: "Download the free Boston app",
        desc: [
            "Open the app",
            "Create an account",
            "Set up your payment method"
        ]
    },
    {
        image: search,
        title: "Tell us where you want to go",
        desc: [
            "Enter your destination",
            "See the price before you took",
            "Tap BOOK NOW to book the ride"
        ]
    },
    {
        image: driver_on_way,
        title: "Your Driver is on their way",
        desc: [
            "See your driver's profile",
            "Track your driver's arrival on the map",
            "Hop in and off you go"
        ]
    },
    {
        image: review,
        title: "Rate your driver and ride",
        desc: [
            "Tell us about your experience",
            "Rate your ride",
            "Rate your driver"
        ]
    },

]
export default work