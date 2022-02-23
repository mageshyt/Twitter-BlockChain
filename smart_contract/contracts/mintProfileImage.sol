// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract profileImageNft is ERC721 , Ownable{
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter _tokenIds;

    //  ! objects
        mapping(uint256 => string) _tokenURIs;
    //here key is going to be int and value is going to be string
    struct RenderToken{ // this is the schema of our object
        uint256 id;
        string uri;
        string space;
    }
    constructor() ERC721("ProfileImageNft", "PIN"){}

    function _setTokenId(uint256 tokenId,string memory _tokenURI)internal {
        _tokenURIs[tokenId] = _tokenURI;
    }
        function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId),"URI not exist on that ID");
        string memory _RUri =  _tokenURIs[tokenId];
        // look through the mapping and return Rui
        return _RUri;
    }


    function getAlltoken() public view returns (RenderToken[] memory){
        uint256 latestId = _tokenIds.current(); // get me the current token id
        RenderToken[] memory res = new RenderToken[](latestId); // res is going to be array of objects
        for(uint256 i = 0; i  <= latestId ; i++){
            // it will check if out nft is exist on that ID or not
            if(_exists(i)){
                string memory uri = tokenURI(i); // if it is exist then 
                res[i] = RenderToken(i,uri," ");//  it is appending the object to the array
            }
        }
        return res;
    }

    // miniting function
    function mint(address recipents,string memory _uri)  public returns(uint256) {
        uint256 newId=_tokenIds.current();
        _mint(recipents,newId);
        _setTokenId(newId,_uri);
        _tokenIds.increment(); // after minting it is going to increment the token id
        return newId;


    }

}