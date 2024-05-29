const gamesRouter = require("express").Router();
const {checkAuth} = require("../middleware/auth")
const {findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvailable, CheckIsGameExist, checkIsVoteRequest} = require("../middleware/games");
const {sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted} = require("../controllers/games");
gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById)
gamesRouter.post("/games", findAllGames, CheckIsGameExist,checkIfCategoriesAvailable, checkEmptyFields, checkAuth, createGame, sendGameCreated);
gamesRouter.put("/games/:id", findGameById, checkIsVoteRequest, checkIfUsersAreSafe, checkIfCategoriesAvailable, checkEmptyFields, checkAuth, updateGame, sendGameUpdated);
gamesRouter.delete("/games/:id", checkAuth ,deleteGame, sendGameDeleted);
module.exports = gamesRouter;