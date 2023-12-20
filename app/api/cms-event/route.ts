import {NextRequest, NextResponse} from "next/server";
import {revalidateTag} from "@node_modules/next/dist/server/web/spec-extension/revalidate-tag";
import {CACHE_TAG_REVIEWS} from "@api/core/request";

const expectedKey = "dsaasdsadsafasef24gdas2"

export const POST = async (request: NextRequest) => {
    const headers = request.headers
    if (!headers.has("KEY") || headers.get("KEY") !== expectedKey) {
        return Response.json(null, {status: 401})
    }
    const {model} = await request.json()
    if ("review" === model) {
        revalidateTag(CACHE_TAG_REVIEWS)
    }
    return new Response(null, {status: 204})
}