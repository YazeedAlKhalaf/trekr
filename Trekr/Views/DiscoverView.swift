//
//  ContentView.swift
//  Trekr
//
//  Created by Yazeed AlKhalaf on 20/07/2021.
//

import SwiftUI

struct DiscoverView: View {
    
    var body: some View {
        ScrollView {
            Text("Discover view")
        }.navigationTitle("Discover")
    }
}

struct DiscoverView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            DiscoverView()
        }
    }
}
