import {
  EntityState,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { allPartyMembers } from "./constants";

export type PartyMember = {
  name: string;
  id: string;
  img: string;
  idPersona: string;
};

export type PartyState = {
  allMembers: EntityState<PartyMember>;
  selectedParty: EntityState<PartyMember>;
};

const allMembersPartyAdapter = createEntityAdapter<PartyMember>({
  selectId: ({ id }) => id,
});

const allMemberInitialState = allMembersPartyAdapter.getInitialState();
const filledAllMemberInitialState = allMembersPartyAdapter.upsertMany(
  allMemberInitialState,
  allPartyMembers
);

const selectedMemberAdapter = createEntityAdapter<PartyMember>({
  selectId: ({ id }) => id,
  sortComparer: (a, b) => b.name.localeCompare(a.name),
});

const initialState: PartyState = {
  allMembers: filledAllMemberInitialState,
  selectedParty: selectedMemberAdapter.getInitialState(),
};

export const partySlicer = createSlice({
  name: "party",
  initialState,
  reducers: {},
});

export const allPartyMembersSelector =
  allMembersPartyAdapter.getSelectors<AppState>(
    (state) => state.party.allMembers
  );

export const selectAllPartyMember = (state: AppState) =>
  allPartyMembersSelector.selectAll(state);
