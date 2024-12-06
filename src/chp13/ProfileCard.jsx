import Card from "./Card";

function ProfileCard(props) {
    return(
        <div>
            <Card title="Inge lee" backgroundColor="#B7F0B1">
                <p>안녕하세요 이하준입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>
            <Card title="martial" backgroundColor="#B2CCFF">
                <p>안녕하세요 마샬입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>
            <Card title="raw" backgroundColor="#FFB2D9">
                <p>안녕하세요 로우입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>
        </div>

    );
}

export default ProfileCard;