const Board = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-purple-300">
            <div className="grid grid-rows-3 grid-flow-col gap-0">
                <div className="square w-24  border-slate-500/40 border-b-4 border-r-4 h-24 flex justify-center items-center bg-purple-300">1</div>
                <div className="square w-24 border-slate-500/40 border-t-4 border-r-4 border-b-4 h-24 flex justify-center items-center bg-purple-300">2</div>
                <div className="square w-24 border-slate-500/40 border-t-4 border-r-4 h-24 flex justify-center items-center bg-purple-300">3</div>

                <div className="square w-24 border-slate-500/40 border-l-4 border-b-4 border-r-4 h-24 flex justify-center items-center bg-purple-300">4</div>
                <div className="square w-24 border-slate-500/40 border-4 h-24 flex justify-center items-center bg-purple-300">5</div>
                <div className="square w-24 border-slate-500/40 border-l-4 border-t-4 border-r-4 h-24 flex justify-center items-center bg-purple-300">6</div>

                <div className="square w-24 border-slate-500/40 border-l-4 border-b-4 h-24 flex justify-center items-center bg-purple-300">7</div>
                <div className="square w-24 border-slate-500/40 border-t-4 border-l-4 border-b-4 h-24 flex justify-center items-center bg-purple-300">8</div>
                <div className="square w-24 border-slate-500/40 border-t-4 border-l-4 h-24 flex justify-center items-center bg-purple-300">9</div>
            </div>
        </div>
    );
}

export default Board;