import CtaButton from "../../ui/CtaButton";

const CommentBox = () => {
  return (
    <div>
      <p className="semi-bold-2xl-text">Comments</p>
      <div className="border-2 p-2 text-right">
        <textarea
          className="w-full h-[100px] resize-none focus:outline-none "
          placeholder="Write Your Comment"
        />
        <CtaButton text={"submit"} color={"primary"} rounded={"lg"} />
      </div>
    </div>
  );
};

export default CommentBox;
