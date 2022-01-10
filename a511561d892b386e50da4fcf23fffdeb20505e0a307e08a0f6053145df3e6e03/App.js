const App = () => {
const content = "Which component is using the content?";
return (
    <div className="App">
        <ComponentOne>
            <ComponentTwo>
                <ComponentThree>
                    <ComponentUsingProps content={content}  />
                <ComponentThree>
            </ComponentTwo>
        </ComponentOne>
    </div>
);
}
