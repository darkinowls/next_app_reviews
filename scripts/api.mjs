import {ReviewService} from "../api";

const r = await ReviewService.getReviews()

console.log(r)