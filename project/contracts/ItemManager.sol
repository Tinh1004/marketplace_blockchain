pragma solidity ^0.6.0;

import "./Ownable.sol";
import "./Item.sol";


contract ItemManager is Ownable{
    enum SupplyChainState{Created, Paided, Delivered}

    struct S_Item {
        Item _item;
        string _identifier;
        uint _itemPrice;
        address _itemAddress;
        ItemManager.SupplyChainState _state;
    }

    struct Buy_Item{
        string _identifier;
        address _itemAddress;
        address _buyerAddress;
    }

    mapping (uint => S_Item ) public items;
    mapping (uint => Buy_Item ) public buyItems;

    uint public itemIndex = 0;
    uint public buyerIndex = 0;

    function getItemIndex() public view returns(uint){
        return itemIndex;
    }

    function getBuyerIndex() public view returns(uint){
        return buyerIndex;
    }

    event SupplyChainStep(uint _itemIndex, uint _step, address _itemAddress);
    event InfoBuyItem(string _identifier, address _buyerAddress, address _itemAddress);

    function createItem(string memory _identifier, uint _itemPrice, address _ownerCreate) public onlyOwner{

        Item item = new Item(this, _itemPrice, itemIndex, _ownerCreate);

        items[itemIndex]._item = item;
        items[itemIndex]._identifier = _identifier;
        items[itemIndex]._itemPrice = _itemPrice;
        items[itemIndex]._itemAddress = address(item);
        items[itemIndex]._state = SupplyChainState.Created;

        emit SupplyChainStep(itemIndex, uint(items[itemIndex]._state), address(item));
        itemIndex ++;

    }

    function triggerPayment(uint _itemIndex) public payable{
        require(items[_itemIndex]._itemPrice == msg.value, "Only full payments accepted!");
        require(items[_itemIndex]._state == SupplyChainState.Created, "Item is further in the chain!");
        items[_itemIndex]._state = SupplyChainState.Paided;

        buyItems[buyerIndex]._identifier = items[_itemIndex]._identifier;
        buyItems[buyerIndex]._itemAddress = items[_itemIndex]._itemAddress;
        buyItems[buyerIndex]._buyerAddress = msg.sender;

        emit InfoBuyItem(buyItems[buyerIndex]._identifier, buyItems[buyerIndex]._itemAddress, buyItems[buyerIndex]._buyerAddress);
        emit SupplyChainStep(_itemIndex, uint(items[_itemIndex]._state), address(items[_itemIndex]._item));
        buyerIndex++;
    
    }

    function triggerDelivery(uint _itemIndex)public onlyOwner{        
        require(items[_itemIndex]._state == SupplyChainState.Paided, "Item is further in the chain!");
        items[_itemIndex]._state = SupplyChainState.Delivered;
        emit SupplyChainStep(_itemIndex, uint(items[_itemIndex]._state), address(items[_itemIndex]._item));
    }
}