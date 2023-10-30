pragma solidity 0.8.19;

contract Level_1 {
    function solution(
        uint256[2][3] calldata x, 
        uint256[2][3] calldata y
    ) external pure returns (
        uint256[2][3] memory result
    ){
        uint8 first = x[0].length;
        uint8 second = x.length;
        for(uint8 i = 0; i<first;i++){
            for(uint8 j = 0; j<second; j++)
            result[i][j] = x[i][j]+ y[i][j];
        }
    }
}