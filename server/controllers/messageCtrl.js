import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js";

export const sendMassege = async (req, res, next) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const newMessage = await Message.create({ senderId, receiverId, message });

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await conversation.save();
    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};

export const getMasseges = async (req, res, next) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");
    if (!conversation) {
      return res.status(200).json([]);
    }
    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};
