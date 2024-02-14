import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Edit</h1>
      <p>이 곳은 수정페이지입니다.</p>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        홈
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
