const router = require("express").Router();
const {
	addComment,
	removeComment,
	addReply,
	removeReply,
} = require("../../controllers/comment-controller");

// /api/comments/<pizzaId>
router.route("/:pizzaId").post(addComment);

// /api/comments/<pizzaId>/<commentId>
// get comment, add reply (by updating comment), delete comment
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// delete reply
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

module.exports = router;
